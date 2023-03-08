/**
 * @type {import('@types/aws-lambda').PreSignUpTriggerHandler}
 */
exports.handler = async (event) => {
  // allowed domains
  const ald = process.env.DOMAINALLOWLIST.split(',').map((d) => d.trim());

  const { email } = event.request.userAttributes;
  const domain = email.substring(email.indexOf('@') + 1);

  /**
   * 
  TODO: Check on Incognito if the email address already exists  
  
  */

  return event;
};
