import "../App.css";
export const Error = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-heading">404</h1>
        <h2 className="error-subheading">Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};
