import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from 'src/customer/customer.service';
import { InvoiceModel } from './invoice.model';
import { InvoiceService } from './invoice.service';

@Resolver(() => InvoiceModel)
export class InvoiceResolver {
  constructor(
    @Inject(InvoiceService) private invoiceService: InvoiceService,
    @Inject(CustomerService) private customerService: CustomerService,
  ) {}

  @Query(() => InvoiceModel)
  async invoice(@Args('id') id: string): Promise<InvoiceModel> {
    return await this.invoiceService.findOneBy(id);
  }
}
