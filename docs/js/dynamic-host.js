const currentDomain = window.location.hostname || "unknown";
document.getElementById("domainLink").textContent = currentDomain;
document.getElementById("domainFooter").textContent = currentDomain;
document.getElementById("domain").value = currentDomain;
document.title = currentDomain;
