// 문제세트 타입 정의
export interface ProblemSet {
  id: string;
  name: string;
  publishDate: string;
  completionRate: number;
  totalQuestions: number;
  studyTime: number;
}

// 단원 타입 정의
export interface Unit {
  id: string;
  name: string;
  problemSets: ProblemSet[];
}
