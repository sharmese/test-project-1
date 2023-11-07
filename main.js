let arrowState = false;

const showArrowContent = () => {
  arrowState = true;
  document.getElementById('arrow-content').style.visibility = 'unset';
};

const hideArrowContent = () => {
  arrowState = false;
  document.getElementById('arrow-content').style.visibility = 'hidden';
};

const handleArrowClick = () => {
  if (arrowState == true) {
    hideArrowContent();
    return;
  }
  if (arrowState == false) {
    showArrowContent();
    return;
  }
};
