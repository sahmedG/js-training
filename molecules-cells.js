function RNA(dnaStrand) {
    // Check if the input is a valid DNA strand
    if (!isValidDNA(dnaStrand)) {
      throw new Error("Invalid DNA strand. Please provide a valid uppercase DNA sequence.");
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
            throw new Error("Invalid DNA nucleotide: " + nucleotide);
        }
      })
      .join('');
  
    return rnaStrand;
  }
  
  function DNA(rnaStrand) {
    if (!isValidRNA(rnaStrand)) {
      throw new Error("Invalid RNA strand. Please provide a valid uppercase RNA sequence.");
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
            throw new Error("Invalid RNA nucleotide: " + nucleotide);
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