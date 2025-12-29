// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export interface Project {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  slug: string;
  content: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  slug: string;
  content: string | null;
  type: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  title: string;
  description: string | null;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | null;
  bio: string | null;
  email: string | null;
  linkedin: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string | null;
  company: string | null;
  testimonial: string;
  image: string | null;
  rating: number;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string | null;
  website: string | null;
  description: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}

// API Client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return this.request<Project[]>('/projects');
  }

  async getProject(id: number): Promise<Project> {
    return this.request<Project>(`/projects/${id}`);
  }

  async getProjectBySlug(slug: string): Promise<Project> {
    return this.request<Project>(`/projects/slug/${slug}`);
  }

  // Resources
  async getResources(): Promise<Resource[]> {
    return this.request<Resource[]>('/resources');
  }

  async getResource(id: number): Promise<Resource> {
    return this.request<Resource>(`/resources/${id}`);
  }

  async getResourceBySlug(slug: string): Promise<Resource> {
    return this.request<Resource>(`/resources/slug/${slug}`);
  }

  // Services
  async getServices(): Promise<Service[]> {
    return this.request<Service[]>('/services');
  }

  async getService(id: number): Promise<Service> {
    return this.request<Service>(`/services/${id}`);
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return this.request<TeamMember[]>('/team-members');
  }

  async getTeamMember(id: number): Promise<TeamMember> {
    return this.request<TeamMember>(`/team-members/${id}`);
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return this.request<Testimonial[]>('/testimonials');
  }

  async getTestimonial(id: number): Promise<Testimonial> {
    return this.request<Testimonial>(`/testimonials/${id}`);
  }

  // Partners
  async getPartners(): Promise<Partner[]> {
    return this.request<Partner[]>('/partners');
  }

  async getPartner(id: number): Promise<Partner> {
    return this.request<Partner>(`/partners/${id}`);
  }
}

// Export singleton instance
export const api = new ApiClient(API_BASE_URL);

