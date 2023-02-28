import { ReactNode } from 'react';
import Layout from '../components/Layout';

export default function A() {
  return (
    <p>A</p>
  );
}

A.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>{ page }</Layout>
  );
}