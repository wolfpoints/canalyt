var access_token = "";
var badgeid = 0;

if (window.location.href.indexOf("steampowered") > -1) {
	access_token = $J("[data-loyaltystore]").data("loyaltystore").webapi_token;
}
else if(window.location.href.indexOf("steamcommunity") > -1)
{
	access_token = JSON.parse($J("#profile_edit_config").attr("data-profile-edit")).webapi_token;
	SetFavoriteFeaturedBadge(access_token, badgeid);
}
else
{
	console.log("go to: https://store.steampowered.com/points/shop or https://steamcommunity.com/my/edit/info");
	SetFavoriteFeaturedBadge(access_token, badgeid);
}

function SetFavoriteFeaturedBadge(access_token, badgeid) {
	$J.post( 'https://api.steampowered.com/IPlayerService/SetFavoriteBadge/v1?access_token=seu-token', {
		access_token: access_token,
		badgeid: badgeid
	});
}
