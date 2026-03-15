-- JSO Agency Trust & Transparency System (ATTS) - Supabase Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Agencies Table
CREATE TABLE IF NOT EXISTS public.agencies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    location TEXT,
    industry TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Reviews Table
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_id UUID REFERENCES public.agencies(id) ON DELETE CASCADE,
    reviewer_name TEXT NOT NULL,
    rating NUMERIC(3, 1) CHECK (rating >= 0 AND rating <= 5),
    review_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. AgencyMetrics Table
CREATE TABLE IF NOT EXISTS public.agency_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_id UUID REFERENCES public.agencies(id) ON DELETE CASCADE UNIQUE,
    placement_success_rate NUMERIC(5, 2) CHECK (placement_success_rate >= 0 AND placement_success_rate <= 100),
    avg_salary NUMERIC(15, 2),
    response_time TEXT,
    complaint_rate NUMERIC(5, 2) CHECK (complaint_rate >= 0 AND complaint_rate <= 100),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. TrustScores Table
CREATE TABLE IF NOT EXISTS public.trust_scores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_id UUID REFERENCES public.agencies(id) ON DELETE CASCADE UNIQUE,
    trust_score NUMERIC(5, 2) CHECK (trust_score >= 0 AND trust_score <= 100),
    reliability_category TEXT,
    structured_score NUMERIC(5, 2),
    sentiment_score NUMERIC(5, 2),
    ai_insights JSONB,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS and add public read policies
ALTER TABLE public.agencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agency_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trust_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on agencies" ON public.agencies FOR SELECT USING (true);
CREATE POLICY "Allow public read access on reviews" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Allow public read access on agency_metrics" ON public.agency_metrics FOR SELECT USING (true);
CREATE POLICY "Allow public read access on trust_scores" ON public.trust_scores FOR SELECT USING (true);

-- To insert dummy data later, you can use the Supabase dashboard or API.
