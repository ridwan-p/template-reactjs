import logo from '../../../assets/logo.svg'
import styles from "./Navigation.module.scss";
import clsx, { ClassArray, ClassDictionary } from 'clsx';

export const Navigation = (props: {
  className?: string | number | boolean | ClassArray | ClassDictionary | null | undefined;
}) => {
  return (
    <div className={clsx(styles.navigation, props.className)}>
      <nav className="navbar navbar-light bg-light px-3 mb-2 border-bottom shadow-sm">
        <a className="navbar-brand w-100 me-0 d-flex justify-content-between" href="#">
          <div>
            <img src={logo} width="24" height="24" className="d-inline-block me-2" alt="logo" />
            <span className="fw-semibold">Yentric</span>
          </div>
          <div>
            <button className="btn">-</button>
          </div>
        </a>
      </nav>
      <ul className="list-unstyled">
        <li className="mb-1">
          <button className={clsx('btn d-inline-flex align-items-center rounded border-0 collapsed', styles['btn-toggle'])} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            <i className="bi bi-house-door me-1"></i> Home
          </button>
          <div className="collapse" id="home-collapse">
            <ul className={clsx('list-unstyled fw-normal pb-1 small', styles['btn-toggle-nav'])}>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button className={clsx('btn d-inline-flex align-items-center rounded border-0 collapsed', styles['btn-toggle'])} data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            <i className="bi bi-speedometer2 me-1"></i> Dashboard
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className={clsx('list-unstyled fw-normal pb-1 small', styles['btn-toggle-nav'])}>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button className={clsx('btn d-inline-flex align-items-center rounded border-0 collapsed', styles['btn-toggle'])} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className={clsx('list-unstyled fw-normal pb-1 small', styles['btn-toggle-nav'])}>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className={clsx('btn d-inline-flex align-items-center rounded border-0 collapsed', styles['btn-toggle'])} data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className={clsx('list-unstyled fw-normal pb-1 small', styles['btn-toggle-nav'])}>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;