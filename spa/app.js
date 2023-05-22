const container = document.querySelector('#root');

// 변수이름을 대문자로 - 주소는 바뀔 일이 없고, 유료 api를 이용할 때 중요한 정보이므로 ( = 환경변수가 들어갈 자리니까 대문자로)
// 가져올 뉴스 api주소
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json';

// 현재 사용자가 보고 있는 페이지의 정보와 화면에 보여질 아이템의 갯수를 저장하는 객체
const store = {
    // (초기화)첫번째페이지
    currentPage: 1,
    // (초기화)한번에 볼 수 있는 목록의 갯수가 10개
    datasPerPage: 10
}

// api 데이터 받아오는 함수
async function getData(url){
    try{
    // 데이터 받아오기
    const response = await fetch(url);
    // 제대로 받아왔는지 확인, 만약 문제가 있으면 throw
    if(!response.ok){
        throw new Error('네트워크에 문제가 있습니다.');
    }
    return response.json();
    }catch(error){
    // throw를 통해 받아옴
    console.log(error);
    }
}

async function newsFeed(){
    const newsFeed = await getData(NEWSLIST_URL);
    // totalPages는 받아올 목록의 총 갯수, 만약 30개를 받아온다면 한 화면에 10개의 목록만 뜨니까 3개의 페이지네이션이 필요 - ceil로 올림해주기
    const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);
    const newsList = [];

    newsList.push('<ul>');

    // 10개의 li 생성하기
    // 현재 내가 보고있는 페이지 쪽 부터 시작하도록
    // 예를들어 내가 2쪽을 보고있다면, 목록인덱스는 10~19여야함. 여기에서 store.currentPage-1 은 1이고, store.datasPerPage (10)을 곱함으로써, 10 인덱스부터 시작하도록 할 수 있음
    for(let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++){
        // url의 id 정보를 newsDetail에서 가져올것임
        newsList.push(`
            <li>
                <a href = "#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
            </li>
        `);
    }

    newsList.push('</ul>');

    // 페이지네이션을 저장하는 변수
    let pageList = '';
    for(let i = 0; i<totalPages; i++){
        pageList += `<li><a href="#/page/${i+1}">${i+1}</a></li>`;
    }
    newsList.push(
        `<nav>
            <ul>
                ${pageList}
            </ul>
        </nav>`
    )
    
    // innerHTML은 문자열을 받는다
    // 배열 하나로 합치기(기본 - 배열사이에 ,가 들어감, ''하면 배열사이에 아무것도 안들어감)
    container.innerHTML = newsList.join('');
}


// 뉴스 디테일 페이지 구성 함수
async function newsDetail(){
    // 위의 #/detail/ 다음의 정보가 필요하다
    // 숫자는 9번째 인덱스부터 끊어서 문자열을 가져오겠다는 뜻, 그러면 id만 뽑아올 수 있음
    const id = location.hash.substring(9);
    // https://api.hnpwa.com/v0/item/$id.json 의 $id를 대체한다
    const newsContent = await getData(CONTENT_URL.replace('$id',id));

    // 누르면 페이지 전환, newsContent의 title만 가져와보기
    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div><a href = "#/page/${store.currentPage}">목록으로 돌아가기</a></div>`;

    console.log(newsContent);
}

// 라우터: 화면을 중계하는 함수
function router(){
    const routePath = location.hash;

    // 초기화면이라면 newsFeed 실행
    if(routePath === ''){
        newsFeed();
    }
    // url을 봤을때 page가 보이면, 우리가 페이지네이션 버튼을 눌렀다는 것을 라우터에게 알려준다는 것이다.
    else if(routePath.includes('#/page/')){
        store.currentPage = parseInt(routePath.substring(7));
        // newsFeed를 불러와서 페이지네이션을 누르면 새로운 목록이 나오도록함
        newsFeed();
    }
    // 초기화면이 아니라면 newsDetail 실행
    else{
        newsDetail();
    }
}

// 브라우저에 이벤트가 발생했을때 콜백함수를 호출하게 만들 수 있음. 
// hashchange란, url에 hash 다음의 값이 변경되었을때 실행된다는 뜻
// 이 때 router 실행하도록 만듦
window.addEventListener('hashchange', router);

router();