const Loading = ({ children, loading, error }) => {
  if (loading) return <p>Loading please wait....</p>;
  if (error) {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
