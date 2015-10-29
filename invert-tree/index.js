module.exports = invertTree;

function invertTree(root) {
  if (!root) {
    return;
  } else {
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    if (!root.left)
      delete root.left;

    if (!root.right)
      delete root.right;

    invertTree(root.left);
    invertTree(root.right);
  }
};
