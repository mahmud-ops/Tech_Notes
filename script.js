console.log("Start of Callback Hell");

setTimeout(() => {
    console.log("Step 1: Connecting to database...");
    
    setTimeout(() => {
        console.log("Step 2: Fetching user data...");

        setTimeout(() => {
            console.log("Step 3: Authenticating user...");

            setTimeout(() => {
                console.log("Step 4: Fetching user preferences...");

                setTimeout(() => {
                    console.log("Step 5: Loading dashboard widgets...");

                    setTimeout(() => {
                        console.log("Step 6: Sending analytics data...");

                        setTimeout(() => {
                            console.log("Step 7: Fetching latest news feed...");

                            setTimeout(() => {
                                console.log("Step 8: Rendering news cards...");

                                setTimeout(() => {
                                    console.log("Step 9: Updating notifications...");

                                    setTimeout(() => {
                                        console.log("Step 10: Everything is loaded 🎉");

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);
