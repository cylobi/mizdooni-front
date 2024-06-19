import { useUserInfoContext } from "../contexts/UserInfoContext";
import LogoutButton from "./LogoutButton";

export default function CustomerTopMessage() {
  const userInfo = useUserInfoContext();
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  };

  const alertInfoStyle: React.CSSProperties = {
    backgroundColor: "#FFF6F7",
    borderColor: "pink",
  };

  // TODO : more styling
  return (
    <div className="container alert alert-info" style={alertInfoStyle}>
      <div className="wrapper" style={wrapperStyle}>
        <p>
          Your reservations are also emailed to&nbsp;&nbsp;
          <a href={"mailto:" + userInfo?.email} style={{ color: "#ed3545" }}>
            {userInfo?.email}
          </a>
        </p>
        <p>
          Address: {userInfo?.address.city}, {userInfo?.address.country}
        </p>
        <LogoutButton />
      </div>
    </div>
  );
}
