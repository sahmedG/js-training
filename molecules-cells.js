function RNA(dnaStrand) {
    // Check if the input is a valid DNA strand
    if (!isValidDNA(dnaStrand)) {
      return '';
    }
  
    // Convert DNA to RNA
    const rnaStrand = dnaStrand
      .split('')
      .map(nucleotide => {
        switch (nucleotide) {
          case 'G':
            return 'C';
          case 'C':
            return 'G';
          case 'T':
            return 'A';
          case 'A':
            return 'U';
          default:
            return '';
        }
      })
      .join('');
  
    return rnaStrand;
  }
  
  function DNA(rnaStrand) {
    if (!isValidRNA(rnaStrand)) {
      return '';
    }
  
    const dnaStrand = rnaStrand
      .split('')
      .map(nucleotide => {
        switch (nucleotide) {
          case 'C':
            return 'G';
          case 'G':
            return 'C';
          case 'A':
            return 'T';
          case 'U':
            return 'A';
          default:
            return '';
        }
      })
      .join('');
  
    return dnaStrand;
  }
  
  function isValidDNA(strand) {
    return /^[ACGT]+$/.test(strand);
  }
  
  function isValidRNA(strand) {
    return /^[ACGU]+$/.test(strand);
  }