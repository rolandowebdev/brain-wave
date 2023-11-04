export const getBackground = (category: any) => {
  switch (category) {
    case 'animals':
      return 'linear(to-l,  #FFD93D, #FF6236)'
    case 'knowledge':
      return 'linear(to-r,  #FF55BB, #7149C6)'
    case 'computer':
      return 'linear(to-l,  #5ab699, #03C988)'
    case 'geography':
      return 'linear(to-l, #146C94, #19A7CE)'
    default:
      throw new Error('Invalid color')
  }
}
