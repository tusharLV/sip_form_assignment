import text from '../constants';

const FolioHeading = () => {
  return (
    <div>
      <div className="text-2xl font-bold flex items-center">
        {text.folio_heading} &nbsp;
        <img
          src="./exclamation-mark-inside-a-circle-svgrepo-com.svg"
          alt=""
          style={{ height: '20px' }}
        />
      </div>
      <div className="my-4">{text.folio_subheading}</div>
    </div>
  );
};
export default FolioHeading;
