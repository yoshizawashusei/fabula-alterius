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

type StatKey =
  | 'HP'
  | 'SP'
  | 'MP'
  | 'STR'
  | 'DEX'
  | 'AGI'
  | 'INT'
  | 'MAG'
  | 'POW'
  | 'VIT'
  | 'SNS'
  | 'LUK'
  | 'APP';

type Stat = Record<StatKey, Number>;
type StatBonus = Partial<Stat>;
