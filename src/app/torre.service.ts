import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  constructor(private http: HttpClient) {}
   
   getBio(username:String): Observable<Bio>{
    return this.http.get<Bio>("https://torre.bio/api/bios/" + username);
   }
}



export class Flags {
  featureDiscovery: boolean;
  canary: boolean;
  onBoarded: boolean;
  benefits: boolean;
  fake: boolean;
  importingLinkedin: boolean;
}

export class Stats {
  recommendations: number;
  recommendationsSent: number;
  verifiers: number;
  itemsVerified: number;
}

export class Person {
  id: string;
  publicId: string;
  name: string;
  email: string;
  hasEmail: boolean;
  showEmail: boolean;
  professionalHeadline: string;
  location: string;
  picture: string;
  theme: string;
  phone: string;
  showPhone: boolean;
  weight: number;
  completion: number;
  verified: boolean;
  claimant: boolean;
  flags: Flags;
  stats: Stats;
  media: any[];
  links: any[];
}

export class Stats2 {
  education: number;
  strengths: number;
}

export class Strength {
  id: string;
  code: number;
  name: string;
  weight: number;
  recommendations: number;
  media: any[];
  stats: any[];
  created: Date;
}

export class Organization {
  id: string;
  name: string;
}

export class Experience {
  id: string;
  category: string;
  name: string;
  organizations: Organization[];
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  additionalInfo: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: any[];
}

export class Organization2 {
  id: string;
  name: string;
}

export class Education {
  id: string;
  category: string;
  name: string;
  organizations: Organization2[];
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  additionalInfo: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: any[];
}

export class Opportunity {
  name: string;
  active: boolean;
}

export class Bio {
  person: Person;
  stats: Stats2;
  strengths: Strength[];
  aspirations: any[];
  experiences: Experience[];
  achievements: any[];
  jobs: any[];
  projects: any[];
  publications: any[];
  education: Education[];
  opportunities: Opportunity[];
}

