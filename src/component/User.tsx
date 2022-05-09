import React, { useEffect } from "react";
import { fetchUser } from "../store/user/userReducer";
import { connect } from "react-redux";
function User({ user, fetchUser }: { user: any; fetchUser: any }) {
  useEffect(() => {
    fetchUser();
    return () => {};
  }, [fetchUser]);
  if (user?.loading) return <div>Loading...</div>;
  if (user?.error) return <div>{user?.error}</div>;
  return (
    <div>
      <h1>{JSON.stringify(user?.user)}</h1>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
