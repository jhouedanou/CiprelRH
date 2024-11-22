
import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const supabase = createClient(
    'https://nbqssxhroavedcnjloys.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icXNzeGhyb2F2ZWRjbmpsb3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyODgzNzcsImV4cCI6MjA0Nzg2NDM3N30.nlYK3l6l4wDqeWEEMknBSsBzlt0bLlFLGkFkbaluZj0'
  )
  
  const saveResults = async (data) => {
    return await supabase
      .from('questionnaire_results')
      .insert(data)
  }

  return {
    saveResults
  }
}
