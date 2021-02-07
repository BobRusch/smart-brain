export const onFormChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};
