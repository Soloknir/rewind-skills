const createEnv = () => {
  return {
    API_URL: process.env.REACT_APP_API_URL
  };
};

export const env = createEnv();