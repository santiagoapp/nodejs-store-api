type Product = {
  productId?: string;
  price?: number;
  registeredAt?: Date;
};

type User = {
  userId?: string;
  username?: string;
  email?: string;
  avatar?: string;
  password?: string;
  birthdate?: Date;
  registeredAt?: Date;
};

export { Product, User }
