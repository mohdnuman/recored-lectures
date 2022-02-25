const API_ROOT='http://192.168.1.37:8000/api';

export  const APIUrls={
    fetchTechCourses:()=>`${API_ROOT}/courses/tech`,
    fetchNonTechCourses:()=>`${API_ROOT}/courses/nontech`,
    fetchSkillBasedCourses:()=>`${API_ROOT}/courses/skillbased`

    // userProfile:(userId)=>`${API_ROOT}/users/${userId}`,
    // userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
	// addFriend: (userId) =>
	// 	`${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
	// removeFriendship: (userId) =>
	// 	`${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
   
    
}