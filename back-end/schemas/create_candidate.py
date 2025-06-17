from typing import Optional
from pydantic import BaseModel, Field

# Pydantic Schema
class CandidateCreate(BaseModel):
    # Step 1
    full_name: str
    age: int
    location: str
    availability: str
    start_date: str

    # Step 2
    email: str
    phone: str
    remote_experience: str
    portfolio_url: Optional[str]
    salary_expectation: str

    # Step 3
    teamwork: int = Field(ge=1, le=10)
    time_management: int = Field(ge=1, le=10)
    problem_solving: int = Field(ge=1, le=10)
    adaptability: int = Field(ge=1, le=10)
    communication: int = Field(ge=1, le=10)
    autonomy: int = Field(ge=1, le=10)
    english_level: int = Field(ge=1, le=10)

    # Step 4
    html_css: int = Field(ge=1, le=10)
    javascript: int = Field(ge=1, le=10)
    frameworks: int = Field(ge=1, le=10)
    responsive_design: int = Field(ge=1, le=10)
    git: int = Field(ge=1, le=10)
    performance_optimization: int = Field(ge=1, le=10)
    ui_ux: int = Field(ge=1, le=10)
    api_integration: int = Field(ge=1, le=10)
    debugging: int = Field(ge=1, le=10)
    testing: int = Field(ge=1, le=10)
    