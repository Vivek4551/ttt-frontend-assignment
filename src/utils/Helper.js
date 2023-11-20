export const formattedCount = (count) =>
  count >= 1000 ? (count / 1000).toFixed(1) + "k" : count;

export const formatProfileName = (name) => {
  const lowercaseName = name.toLowerCase();
  const formattedName = lowercaseName.replace(/\s+/g, ""); // Remove spaces
  return formattedName;
};

export const renderThoughtContent = (content) => {
  const [firstSentence, ...remainingContent] = content.split(".");
  const formattedContent = remainingContent.join("\n\n");
  return (
    <>
      <p>{firstSentence}.</p>
      {formattedContent && (
        <p>
          <br/>
          {formattedContent}
        </p>
      )}
    </>
  );
};

export const renderListContent = (content) => {
  const formattedContent = content.replace(/ - /g, "\n- ");
  const listItems = formattedContent.split("\n");
  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))}
    </ul>
  );
};


export const truncateContent = (content, wordLimit) => {
  const words = content.split(" ");
  if (words.length > wordLimit) {
    const truncatedContent = words.slice(0, wordLimit).join(" ") + "...";
    return truncatedContent;
  }
  return content;
};