// 添加样式
export function addLinkToHead(href) {
  const iconLink = document.createElement("link");
  iconLink.rel = "stylesheet";
  iconLink.href = href;

  document.head.append(iconLink);
}