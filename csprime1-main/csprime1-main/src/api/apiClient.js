const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || payload.success === false) {
    throw new Error(payload.message || "Unable to complete the request.");
  }

  return payload.data;
};

const apiClient = {
  getModules: (params = {}) => {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
    ).toString();
    return request(`/modules${query ? `?${query}` : ""}`);
  },
  getModuleById: (moduleId) => request(`/modules/${encodeURIComponent(moduleId)}`),
  getTopics: () => request("/topics"),
  getModulesByTopic: (topicId) => request(`/topics/${encodeURIComponent(topicId)}/modules`),
  getModuleAnalytics: (moduleId) => request(`/analytics/module/${encodeURIComponent(moduleId)}`),
  getFaqs: () => request("/faqs"),
  getTestimonials: () => request("/testimonials"),
};

export default apiClient;
