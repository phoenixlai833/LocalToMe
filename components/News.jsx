export default function News({ newsId, newsTitle, newsImage }) {

  return (
    <div>
      <img width="100" height="100" src={newsImage} alt={newsTitle} />
      <p>{newsTitle}</p>
    </div>
  );
}
