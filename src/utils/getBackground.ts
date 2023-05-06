export const getBackground = (category: any) => {
  switch (category) {
    case 'animals':
      return 'linear(to-l,  #FFD93D, #FF6236)'
    case 'knowledge':
      return 'linear(to-l, #146C94, #19A7CE)'
    case 'computer':
      return 'linear(to-l,  #6ECCAF, #03C988)'
    case 'geography':
      return 'linear(to-r,  #FF55BB, #7149C6)'
    default:
      throw new Error('Invalid color')
  }
}
