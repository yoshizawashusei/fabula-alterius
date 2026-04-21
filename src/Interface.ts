type TOPLevelData = { ID: String; Tags: Set<String> };

type WithLore<T> = T & { Lore: String };

type BodyPart =
  | 'Head'
  | 'Ear'
  | 'Eye'
  | 'Mouth'
  | 'Neck'
  | 'Torso'
  | 'Back'
  | 'LeftArm'
  | 'LeftHand'
  | 'RightArm'
  | 'RightHand'
  | 'Finger'
  | 'Weist'
  | 'LeftLeg'
  | 'RightLeg'
  | 'LeftFoot'
  | 'RightFoot';
