export function canExecuteFastAttack(knightIsAwake) {
  if(knightIsAwake){
    return false;
  }
  else{
    return true;
  }
}
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(knightIsAwake || archerIsAwake || prisonerIsAwake){
    return true;
  }
  else{
    return false;
  }
}
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(prisonerIsAwake && !archerIsAwake){
    return true;
  }
  else{
    return false;
  }
}
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if(!archerIsAwake){
    if(!knightIsAwake){
      if (!prisonerIsAwake && !petDogIsPresent) {
        return false;
      }
      else {
        return true;
      }
    }
    else if(knightIsAwake && petDogIsPresent){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
