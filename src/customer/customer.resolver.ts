import { Inject } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';
import { InvoiceService } from '../invoice/invoice.service';
import { InvoiceModel } from 'src/invoice/invoice.model';

@Resolver(() => CustomerModel)
export class CustomerResolver {
  constructor(
    @Inject(CustomerService) private customerService: CustomerService,
    @Inject(InvoiceService) private invoiceService: InvoiceService,
  ) {}

  @Query(() => CustomerModel)
  async customer(@Args('id') id: string): Promise<CustomerModel> {
    return await this.customerService.findOneBy(id);
  }
  @ResolveField(() => [InvoiceModel])
  async invoices(@Parent() customer) {
    const { id } = customer;
    console.log(customer);
    return this.invoiceService.findByCustomer(id);
  }
  @Query(() => [CustomerModel])
  async customers(): Promise<CustomerModel[]> {
    return await this.customerService.findAll();
  }
}
