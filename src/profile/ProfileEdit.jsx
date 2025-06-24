import MerchantEditProfile from "./MerchantEditProfile";

function ProfileEdit() {
  const isMerchant = true;

  return <>{isMerchant ? <MerchantEditProfile /> : null};</>;
}

export default ProfileEdit;
