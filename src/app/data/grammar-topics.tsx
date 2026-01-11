import { GrammarTopic } from './types';
import { verbToBeTopic } from './grammar/verb-to-be';
import { pronounsTopic } from './grammar/pronouns';
import { articlesTopic } from './grammar/articles';
import { pluralNounsTopic } from './grammar/plural-nouns';
import { presentContinuousTopic } from './grammar/present-continuous';
import { adverbsTopic } from './grammar/adverbs';
import { imperativeTopic } from './grammar/imperative';
import { pastSimpleTopic } from './grammar/past-simple';
import { prepositionsTimeTopic } from './grammar/prepositions-time';
import { prepositionsPlaceTopic } from './grammar/prepositions-place';
import { questionsTopic } from './grammar/questions';
import { verbsIngTopic } from './grammar/verbs-ing';
import { canCantTopic } from './grammar/can-cant';
import { wouldLikeTopic } from './grammar/would-like';
import { wordFormationTopic } from './grammar/word-formation';

export const grammarTopics: GrammarTopic[] = [
  verbToBeTopic,
  pronounsTopic,
  articlesTopic,
  pluralNounsTopic,
  presentContinuousTopic,
  adverbsTopic,
  imperativeTopic,
  pastSimpleTopic,
  prepositionsTimeTopic,
  prepositionsPlaceTopic,
  questionsTopic,
  verbsIngTopic,
  canCantTopic,
  wouldLikeTopic,
  wordFormationTopic
];
