var UserProfile = (function() {
  var c_username = "";
  var logged = false;

  var getName = function() {
    return c_username;    // Or pull this from cookie/localStorage
  };

  var getStatw = function() {
    return logged;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    c_username = name;
    // Also set this in cookie/localStorage
  };

  var setStat = function(stat) {
    logged = stat;
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName,
    getStatw: getStatw,
    setStat: setStat
  }

})();

export default UserProfile;
