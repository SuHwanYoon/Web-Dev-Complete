function loadContent(url) {
  // 절대 경로 처리
  // 현재 페이지의 origin을 가져와서, baseUrl로 설정
  const baseUrl = window.location.origin;
  // 주어진 URL을 절대 URL로 변환
  // URL 객체를 사용해 상대 URL을 baseUrl과 결합하여 절대 URL을 생성
  const absoluteUrl = new URL(url, baseUrl).href;
  // fetch를 사용해 absoluteUrl에서 HTML 콘텐츠를 가져옴
  fetch(absoluteUrl)
    .then((response) => response.text())
    .then((html) => {
      // 응답 텍스트를 HTML로 파싱
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      // 파싱된 HTML 문서에서 [role="main"] 요소를 찾음
      // [role="main"] 요소가 없으면 문서의 body를 사용
      const mainContent = doc.querySelector('[role="main"]') || doc.body;
      // 현재 문서의 content 요소에 mainContent의 innerHTML을 삽입
      // HTML문서에 id=content로 정의한 부분에 페이지를 삽입
      content.innerHTML = mainContent.innerHTML;
    })
    .catch((error) => {
      // 오류가 발생한 경우 콘솔에 오류를 출력하고,
      // content 요소에 오류 메시지를 표시
      console.error("Error loading content:", error);
      content.innerHTML = "<p>Error loading content. Please try again.</p>";
    });
}
