import Head from 'next/head';
import styles from './Home.module.scss';
import clsx from 'clsx';
import axios from 'axios';

//https://www.themealdb.com
export default function Home(props) {
	console.log(props);
	return (
		<>
			<Head>
				<title>Next Recipe</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={clsx(styles.main)}>
				<h1>Main Page</h1>
			</main>
		</>
	);
}

export async function getStaticProps() {
	//props로 데이터 넘길때에는 data안쪽의 값까지 뽑아낸다음에 전달
	const { data } = await axios.get('/filter.php?c=Seafood');
	console.log('data fetching on Server', data);

	return {
		props: data,
		revalidate: 10,
	};
}
