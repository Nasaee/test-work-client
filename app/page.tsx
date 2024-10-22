import AddUserButton from '@/components/AddUserButton';
import Container from '@/components/global/Container';

function Home() {
  return (
    <Container className='p-12'>
      <section className='flex flex-col gap-3 bg-gray-100 px-8 py-12'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-3'>
          CRUD USERS
        </h1>
        <AddUserButton />
      </section>
    </Container>
  );
}
export default Home;
