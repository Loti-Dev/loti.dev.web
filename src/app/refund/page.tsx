import styles from "../styles/legal.module.css"

export default function Refund() {
    return (
        <section className={styles["content"]}>
            <div className={styles["legal"]}>
                <span className={styles["title"]}>REFUND POLICY</span>
                <h4 className={styles["effective-date"]}>Last updated April 23, 2023</h4>
                <p>
                    This Refund Policy describes our general policies regarding handling refunds in
                    general and does not serve as a legal base, nor is it approved by professionals.
                    It lays down the foundations for any decision made upon requests. Any point
                    listed here might be a reason for permitted initiations of any refund.
                </p>

                <h1>Possible Reasons</h1>
                <p>
                    Listed below are possible reasons that might permit a full or prorated refund
                    initiation.
                </p>
                <p>
                    Any unauthorized transaction was not undertaken on your behalf but financially
                    affected you.
                </p>
                <p>
                    Every situation in which you are not successfully receiving or unable to access
                    promised premium perks.
                </p>
                <p>
                    All of the reasons above require viable proof to be accepted as possible
                    inquiries for initiating a refund.
                </p>

                <h1>Non-acceptable inquires</h1>
                <p>
                    Below are situations where any refund will not be initiated due to
                    non-acceptable reasons.
                </p>
                <p>
                    Any situation in which you actively or passively forgot to cancel your ongoing
                    subscription.
                </p>
                <p>Any further non-believable reason without feasible argumentation.</p>
                <p>
                    Please note that we cannot accept inquiries in the situations listed above due
                    to financial reasons.
                </p>

                <h1>Important Notes</h1>
                <p>
                    To successfully reach an agreement, please remember to behave patiently and
                    pleasantly. Performing a chargeback on behalf of the payment processor your
                    transaction was handled through will not work out in your favor! In most
                    situations, we can fight such cases to maintain our rights. Without prior
                    contact with the team behind ProBot, you might end up being excluded from the
                    usage of our services indefinitely. When staying friendly and courteous, you
                    might end up being served with a refund regardless of the non-application of the
                    stated above points.
                </p>

                <h1>Contact Us</h1>
                <p>
                    If you believe your situation is viable for a refund you may wish to contact us
                    via our email address support@resent.dev
                </p>
            </div>
        </section>
    )
}
