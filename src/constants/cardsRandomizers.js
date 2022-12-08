import { ReactComponent as TaskLogoIcon } from '../assets/icons/taskLogo.svg'
import { ReactComponent as SkillLogoIcon } from '../assets/icons/skillLogo.svg'
import { ReactComponent as TaskTitleOverlayIcon } from '../assets/icons/taskTitleOverlay.svg'
import { ReactComponent as SkillTitleOverlayIcon } from '../assets/icons/skillTitleOverlay.svg'
import TaskBackgroundImage from '../assets/images/taskBackground.png'
import SkillBackgroundImage from '../assets/images/skillBackground.png'

export const TASK_RANDOMIZER = {
  title: 'Задание',
  titleOverlay: TaskTitleOverlayIcon,
  logo: TaskLogoIcon,
  background: TaskBackgroundImage,
};

export const SKILL_RANDOMIZER = {
  title: 'Навыки',
  titleOverlay: SkillTitleOverlayIcon,
  logo: SkillLogoIcon,
  background: SkillBackgroundImage,
};
