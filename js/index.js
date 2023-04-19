function gotoUrl(url)
{
    const newWindow = window.open(url);
    newWindow.opener = null;
}