function solution(sequence) {
    let badCount = 0;
    let indexOfBadCountElement = -1; // We pretend that this element is removed from sequence Array.
    
    for(i = 1; i < sequence.length; i++) {
        if (sequence[i - 1] >= sequence[i]) { // if previous element is greater or equal to my current element, which is not good.
            badCount++;
            indexOfBadCountElement = i;
            if (badCount > 1) return false; // We have issues on couple of positions in an Array. Indicates, Its not increasing sequence. 
        }
    }
    
    // Increasing Sequence Cases.
    if (
        badCount === 0 || // If no element is removed.
        (indexOfBadCountElement === sequence.length - 1 || indexOfBadCountElement === 1) || // If only the last or the first element is removed.
        (sequence[indexOfBadCountElement - 1] < sequence[indexOfBadCountElement + 1]) || // If Previous value is removed and the value which is previous of removed value is less than my value.
        (sequence[indexOfBadCountElement - 2] < sequence[indexOfBadCountElement]) // If Previous value is removed and the value which is previous of removed value is less than my value.
    ) return true;
    
    return false;
    
}
    /*
        // A first, stupid solution to the problem, that solves it, but maybe not very time-/space efficient.
        
        let temporarySequence = [...sequence];
        let isIncreasingSequence = false;
        // let temporarySequenceElement = temporarySequence[0];
        
        for(i = 0; i < sequence.length; i++ ) {
            // temporarySequenceElement = temporarySequence[i];
            
            temporarySequence.splice(i, 1);
            isIncreasingSequence = false;
            
            if(temporarySequence.length <= 1) {
                // This is increasing sequence.
                return true;
            
            } else {
                for(j = 0; j < temporarySequence.length -1; j++){
                    
                    if(temporarySequence[j] < temporarySequence[j + 1]){
                        // This means till now this array is increasing sequence 
                        // if at the end of inner loop the it stays in this condition we are going to return true .
                        // As this array is increasing sequence.
                        
                        isIncreasingSequence = true;
                    }  else {
                        // This means i need to move out of this loop as this array is not increasing sequence.
                        //  so we need to continue with outer Array.
                        isIncreasingSequence = false;
                        break;
                    }
                }
            }
            
            if(isIncreasingSequence) return isIncreasingSequence;
            // temporarySequence.splice(i, 0, temporarySequenceElement);
            temporarySequence = [...sequence];
            
        }
        
        return isIncreasingSequence;
    
    */

//Best Solution

function solution(seq) {
    var bad=0
    for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
      bad++
      if(bad>1) return false
      if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
    }
    return true
  }
  