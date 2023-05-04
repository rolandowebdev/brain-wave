export interface QuizProps {
  id: number
  title: 'Animals' | 'General Knowledge' | 'Computer' | 'Geography' | 'Unknown'
  category: 'animals' | 'knowledge' | 'computer' | 'geography' | 'unknown'
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Unknown'
  description?: string
}
