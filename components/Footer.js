

export default function Footer() {

    return (
        <div className="grid grid-cols-1 bg-gray-100 gap-y-8 px-20 py-12 md:grid-cols-4">
            <div className="space-y-4">
                <h5 className="text-md font-semibold ">Support</h5>
                <p>Help Center
                </p>
                <p>Safety information</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Supporting people with disabilities</p>
            </div>
            <div className="space-y-4">
                <h5 className="text-md font-semibold ">Community</h5>
                <p>Airbnb.org: disaster relief housing</p>
                <p>Support Afghan refugees</p>
                <p>Combating discrimination</p>
               
            </div>
            <div className="space-y-4">
                <h5 className="text-md font-semibold ">About</h5>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
            </div>
            <div className="space-y-4">
                <h5 className="text-md font-semibold ">Hosting</h5>
                <p>Try hosting</p>
                <p>AirCover: protection for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>
        </div>
    )
}