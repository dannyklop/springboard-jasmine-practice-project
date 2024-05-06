describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo({ preventDefault: function () {} });
		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});

	it("should update server table on submitServerInfo()", function () {
		submitServerInfo(); // Assuming serverNameInput already has a value from beforeEach
		let addedServer = document.querySelector("#serverTable tbody tr");
		expect(addedServer).not.toBeNull();
		expect(addedServer.firstElementChild.textContent).toBe("Alice");
	});

	it("should reflect updates in server table correctly", function () {
		serverNameInput.value = "Alice";
		submitServerInfo(); // First server addition

		serverNameInput.value = "Bob";
		submitServerInfo(); // Second server addition
		expect(serverTbody.children.length).toEqual(2);
	});

	afterEach(function () {
		serverNameInput.value = "";
		serverTbody.innerHTML = "";
		allServers = {};
		serverId = 0;
	});
});
