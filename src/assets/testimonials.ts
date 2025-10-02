export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
    profilePicture?: string | null | undefined
}

export const testimonials: Testimonial[] = []
